export default function PresenterCatcher() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    if (descriptor === undefined) {
      // @ts-ignore
      descriptor = Object.getOwnPropertyDescriptor(target, propertyKey);
    }

    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      try {
        // @ts-ignore
        this.onChangeState({
          isLoading: true,
          isError: false,
          statusCode: null,
          errorMessage: ''
        });

        const result = originalMethod.apply(this, args);
        // Check if method is asynchronous
        if (result && result instanceof Promise) {
          const res = await result;
          // @ts-ignore
          this.onChangeState({ isLoading: false });
          return res;
        }

        return result;
      } catch (error: any) {
        _handleError(this, error);
      }
    };
    return descriptor;
  };
}

function _handleError(ctx: any, error: Error) {
  const errorPayload = {
    errorMessage: error.message,
    statusCode: 400
  };
  ctx.onChangeState({
    isError: true,
    isLoading: false,
    ...errorPayload
  });
}
