import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import AddBook from '../Pages/AddBook';
import ShowBooks from '../Pages/ShowBooks';
import Nav from '../Shared/Nav';
import Footer from '../Shared/Footer';
import EditBook from '../Pages/EditBook';

const Index = () => {
    return (
        <div>
            <BrowserRouter>
            <Nav/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/add-book" element={<AddBook/>}/>
                    <Route path="/show-books" element={<ShowBooks/>}/>
                    <Route path="/edit-book" element={<EditBook/>}/>
                    <Route path="*" element={<h1>Page not found</h1>}/>
                </Routes>
            </main>
            <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default Index;