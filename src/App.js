import Header from './components/Header';
import Footer from './components/Footer';
import {categoriesData} from './components/Dishes_Data';
import Categories from './components/Categories';
import { useState } from 'react'

export default function App() {

    return (
        <div>
			<Header />
            <div class="conteudo">
                {categoriesData.map(({ categoriesTitle, dishesData }) => <Categories
                    categoryTitle={categoriesTitle}
                    dishesData={dishesData}                    
                />)}
            </div>
            <Footer />
		</div>
    );
}