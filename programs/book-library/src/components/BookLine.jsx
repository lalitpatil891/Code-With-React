import React from 'react'
import Book from './Book'
export default function BookLine ()
{
    let motivationBooks = [
			{
				name: "wings of fire",
				url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/3/j/b/wings-of-fire-original-imah4ssxb4y9zmvg.jpeg?q=90&crop=false",
			},
			{
				name: "secret",
				url: "https://m.media-amazon.com/images/I/91YmLCKgJuL._AC_UF1000,1000_QL80_.jpg",
			},
			{
				name: "monk who sold his ferrari",
				url: "https://m.media-amazon.com/images/I/61OByUf1TfL.jpg",
			},
			{
				name: "Unlocking unicorn secrets",
				url: "https://m.media-amazon.com/images/I/51ObKo3jXKL._AC_UF1000,1000_QL80_.jpg",
			},
			{
				name: "Atomic Habits",
				url: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
			},
		]
  return (
		<div className='BookLine'>
			{motivationBooks.map((v) => (
                <Book title={v.name} url={v.url} />
			))}
		</div>
	)
}
