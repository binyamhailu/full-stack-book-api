// src/api/bookApi.ts

import axios from "axios";

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
      title: 'Book 1',
      discountRate: 20,
      coverImage: '/Group26086594.svg', 
      price: 19.99,
    },
    {
      id: 2,
      title: 'Book 2',
      discountRate: 15,
      coverImage: '/Group26086594.svg', 
      price: 29.99,
    },
    {
        id: 3,
        title: 'Book 1',
        discountRate: 20,
        coverImage: '/Group26086594.svg', 
        price: 19.99,
      },
      {
        id: 4,
        title: 'Book 2',
        discountRate: 15,
        coverImage: '/Group26086594.svg', 
        price: 29.99,
      } ,{
        id: 5,
        title: 'Book 1',
        discountRate: 20,
        coverImage: '/Group26086594.svg', 
        price: 19.99,
      },
      {
        id: 6,
        title: 'Book 2',
        discountRate: 15,
        coverImage: '/Group26086594.svg', 
        price: 29.99,
      }, {
        id: 7,
        title: 'Book 1',
        discountRate: 20,
        coverImage: '/Group26086594.svg', 
        price: 19.99,
      },
      {
        id: 8,
        title: 'Book 2',
        discountRate: 15,
        coverImage: '/Group26086594.svg', 
        price: 29.99,
      } ,{
        id: 9,
        title: 'Book 1',
        discountRate: 20,
        coverImage: '/Group26086594.svg', 
        price: 19.99,
      },
      {
        id: 10,
        title: 'Book 2',
        discountRate: 15,
        coverImage: '/Group26086594.svg', 
        price: 29.99,
      }, {
        id: 11,
        title: 'Book 1',
        discountRate: 20,
        coverImage: '/Group26086594.svg', 
        price: 19.99,
      },
      {
        id:12,
        title: 'Book 2',
        discountRate: 15,
        coverImage: '/Group26086594.svg', 
        price: 29.99,
      }
  ];
  
//   // Simulate fetching books from an API
//   export async function getBooks(page: number, pageSize: number): Promise<{ data: Book[] }> {
//     // Simulate fetching books from an API with pagination
//     const startIndex = (page - 1) * pageSize;
//     const endIndex = startIndex + pageSize;
//     const paginatedBooks = books.slice(startIndex, endIndex);
  
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ data: paginatedBooks });
//       }, 1000);
//     });
//   }
  export async function getBooks(page: number, pageSize: number): Promise<{ data: Book[] }> {
    try {
      const response = await axios.get<{ data: Book[] }>(`http://localhost:3000/books`, {
        params: {
          page,
          pageSize,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  }

  
  
  
  
  
  