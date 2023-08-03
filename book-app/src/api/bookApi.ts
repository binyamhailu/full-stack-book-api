// src/api/bookApi.ts

import axios from "axios";

// src/books.ts

interface Book {
  id: number;
  title: string;
  discountRate: number;
  coverImage: string;
  price: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: 'The Shining',
    discountRate: 15,
    coverImage: '/Group26086594.svg',
    price: 9.99,
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    discountRate: 20,
    coverImage: '/Group26086594.svg',
    price: 12.99,
  },
  {
    id: 3,
    title: 'Pride and Prejudice',
    discountRate: 10,
    coverImage: '/Group26086594.svg',
    price: 8.99,
  },
  {
    id: 4,
    title: '1984',
    discountRate: 25,
    coverImage: '/Group26086594.svg',
    price: 11.99,
  },
  {
    id: 5,
    title: 'Brave New World',
    discountRate: 30,
    coverImage: '/Group26086594.svg',
    price: 10.99,
  },
  {
    id: 6,
    title: 'Harry Potter and the Sorcerer\'s Stone',
    discountRate: 15,
    coverImage: '/Group26086594.svg',
    price: 14.99,
  },
  {
    id: 7,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    discountRate: 20,
    coverImage: '/Group26086594.svg',
    price: 18.99,
  },
  {
    id: 8,
    title: 'The Great Gatsby',
    discountRate: 10,
    coverImage: '/Group26086594.svg',
    price: 9.99,
  },
  {
    id: 9,
    title: 'Fahrenheit 451',
    discountRate: 25,
    coverImage: '/Group26086594.svg',
    price: 11.99,
  },
  {
    id: 10,
    title: 'The Catcher in the Rye',
    discountRate: 30,
    coverImage: '/Group26086594.svg',
    price: 12.99,
  },
  {
    id: 11,
    title: 'Moby-Dick',
    discountRate: 15,
    coverImage: '/Group26086594.svg',
    price: 14.99,
  },
  {
    id: 12,
    title: 'Frankenstein',
    discountRate: 20,
    coverImage: '/Group26086594.svg',
    price: 11.99,
  },
  {
    id: 13,
    title: 'The Odyssey',
    discountRate: 10,
    coverImage: '/Group26086594.svg',
    price: 8.99,
  },
  {
    id: 14,
    title: 'Don Quixote',
    discountRate: 25,
    coverImage: '/Group26086594.svg',
    price: 15.99,
  },
  {
    id: 15,
    title: 'One Hundred Years of Solitude',
    discountRate: 30,
    coverImage: '/Group26086594.svg',
    price: 14.99,
  },
  {
    id: 16,
    title: 'War and Peace',
    discountRate: 15,
    coverImage: '/Group26086594.svg',
    price: 19.99,
  },
  {
    id: 17,
    title: 'Crime and Punishment',
    discountRate: 20,
    coverImage: '/Group26086594.svg',
    price: 13.99,
  },
  {
    id: 18,
    title: 'The Hobbit',
    discountRate: 10,
    coverImage: '/Group26086594.svg',
    price: 12.99,
  },
  {
    id: 19,
    title: 'The Little Prince',
    discountRate: 25,
    coverImage: '/Group26086594.svg',
    price: 9.99,
  },
  {
    id: 20,
    title: 'The Divine Comedy',
    discountRate: 30,
    coverImage: '/Group26086594.svg',
    price: 14.99,
  },
  {
    id: 21,
    title: 'Alice\'s Adventures in Wonderland',
    discountRate: 15,
    coverImage: '/Group26086594.svg',
    price: 10.99,
  },
  {
    id: 22,
    title: 'The Adventures of Huckleberry Finn',
    discountRate: 20,
    coverImage: '/Group26086594.svg',
    price: 12.99,
  },
  {
    id: 23,
    title: 'Wuthering Heights',
    discountRate: 10,
    coverImage: '/Group26086594.svg',
    price: 9.99,
  },
  {
    id: 24,
    title: 'The Brothers Karamazov',
    discountRate: 25,
    coverImage: '/Group26086594.svg',
    price: 15.99,
  },
  {
    id: 25,
    title: 'The Picture of Dorian Gray',
    discountRate: 30,
    coverImage: '/Group26086594.svg',
    price: 13.99,
  },
  {
    id: 26,
    title: 'Heart of Darkness',
    discountRate: 15,
    coverImage: '/Group26086594.svg',
    price: 11.99,
  },
  {
    id: 27,
    title: 'Dracula',
    discountRate: 20,
    coverImage: '/Group26086594.svg',
    price: 12.99,
  },
  {
    id: 28,
    title: 'Great Expectations',
    discountRate: 10,
    coverImage: '/Group26086594.svg',
    price: 10.99,
  },
  {
    id: 29,
    title: 'Les Misérables',
    discountRate: 25,
    coverImage: '/Group26086594.svg',
    price: 14.99,
  },
  {
    id: 30,
    title: 'The Count of Monte Cristo',
    discountRate: 30,
    coverImage: '/Group26086594.svg',
    price: 15.99,
  },
  {
    id: 31,
    title: 'The Hunchback of Notre-Dame',
    discountRate: 15,
    coverImage: '/Group26086594.svg',
    price: 13.99,
  },
  {
    id: 32,
    title: 'The Iliad',
    discountRate: 20,
    coverImage: '/Group26086594.svg',
    price: 10.99,
  },
]


  export async function getBooks(page: number) {
    const booksPerPage = 10; // Number of books to fetch per page
    const startIndex = (page - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: books.slice(startIndex, endIndex) });
      }, 1000);
    });
  }
  
  // export async function getBooks(page: number, pageSize: number): Promise<{ data: Book[] }> {
  //   try {
  //     const response = await axios.get<{ data: Book[] }>(`http://localhost:3000/books`, {
  //       params: {
  //         page,
  //         pageSize,
  //       },
  //     });
  
  //     return response.data;
  //   } catch (error) {
  //     console.error('Error fetching books:', error);
  //     throw error;
  //   }
  // }

  
  
  
  
  
  