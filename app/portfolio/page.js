
require('dotenv').config()

import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";


export const metadate = {
  title: 'Портфолио'
}

async function getData() {
  const res = await fetch('http://localhost:1337/portfolios?_limit=20');

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data)
  return (
    <div className="portfolio">
      <div className="container">
        <h2 className="portfolio__header">портфолио</h2>    

        <div className="portfolio__content">
        {
          data.map((element) => {
            let src = `${process.env.APIUrl}${element.Photo.formats.large.url}`

            return (
              <div className="portfolio__item" key={element.id}>
                <img src={src} alt=""/>
                <p>{element.Name}</p>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}