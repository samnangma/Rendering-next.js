import Card from '@/components/card';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export const metadata = {
    title: 'ISTAD Products'
    , description: 'List all products'

}


export default async function Products() {
    const products = await getProducts()
    return (

        <main className="container mx-auto flex min-h-screen flex-wrap items-center justify-around p-3 ">
            {
            products.map((data)=>(
                <Card
                key={data.id}
                title={data.title}
                description={data.description}
                image={data.images}
                id={data.id}
                />
            ))
           }   
        </main>
      

    );
}



export async function getProducts() {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products`, { cache: "no-store" })

    return res.json()

}



