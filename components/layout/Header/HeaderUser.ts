import { Component, State, Vue } from 'nuxt-property-decorator';


@Component
export default class HeaderUser extends Vue {
@State(state => state.auth.loggedIn) loggedIn: boolean;
}
