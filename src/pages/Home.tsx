import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando oerguntas e respostas" />
                <strong>Crie Salas de Q&amp;A ao-vivo</strong>
                <p>Tire suas dúvidas da audiência em tempo-real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="letmeask" />
                    <button>
                        <img src={googleIconImg} alt=" Logo do Google" />
                        Cria sua sala com sua conta Google
                    </button>
                    <div>Ou entre em uma Sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}