
require('dotenv').config()

import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
// import { useState, useEffect } from "react";


export const metadate = {
  title: 'Портфолио'
}

// export const getStaticProps = async() => {
//   const res = await fetch('http://localhost:1337/portfolios');
//   const data = await res.json();
//   console.log(res)
 
//   return { props: { portfolios: data } };
// }

// const Portfolio = () => {
//   const [portfolio, setPortfolio] = useState(null)

//   useEffect(() => {
//     const fetchData = async() => {
//       const res = await fetch('http://localhost:1337/portfolios');
//       const data = await res.json();
//       setPortfolio(data)
//     }
//     fetchData()
//   }, [])

//   return (
//     <div className="portfolio">
//       <div className="container">
//         <h2 className="portfolio__header">портфолио</h2>    

//         <div className="portfolio__content">
//         {
//           console.log(typeof portfolios)
//           // data.map((element) => {
//           //   let src = `${process.env.APIUrl}${element.Photo.formats.large.url}`

//           //   return (
//           //     <div className="portfolio__item" key={element.id}>
//           //       <img src={src} alt=""/>
//           //       <p>{element.Name}</p>
//           //     </div>
//           //   )
//           // })
//         }
//         </div>
//       </div>
//     </div>
//   )
// };

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/portfolios`);
  const data = await res.json();
  console.log(res)
 
  return { props: { portfolios: data } };
}

export default function Page ({ data }) {
  // const res = await fetch('http://localhost:1337/portfolios');
  // const data = await res.json();
  return (
    <div className="portfolio">
      <div className="container">
        <h2 className="portfolio__header">портфолио</h2>    

        <div className="portfolio__content">
        {
          console.log(typeof data)
        }
        </div>
      </div>
    </div>
  )
}