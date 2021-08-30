import Header from './components/Header';
import Main_Dishes from './components/Main_Dishes';
import Drinks from './components/Drinks';
import Deserts from './components/Deserts';
import Footer from './components/Footer';

export default function App() {
    return (
        <div>
			<Header />
            <div class="conteudo">
                <Main_Dishes />
                <Drinks />
                <Deserts />
            </div>
            <Footer />
		</div>
    );
}