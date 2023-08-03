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
        title: 'Book 3',
        discountRate: 20,
        coverImage: '/Group26086594.svg', 
        price: 19.99,
      },
      {
        id: 4,
        title: 'Book 4',
        discountRate: 15,
        coverImage: '/Group26086594.svg', 
        price: 29.99,
      } ,{
        id: 5,
        title: 'Book 5',
        discountRate: 20,
        coverImage: '/Group26086594.svg', 
        price: 19.99,
      },
      {
        id: 6,
        title: 'Book 6',
        discountRate: 15,
        coverImage: '/Group26086594.svg', 
        price: 29.99,
      }, {
        id: 7,
        title: 'Book 7',
        discountRate: 20,
        coverImage: '/Group26086594.svg', 
        price: 19.99,
      },
      {
        id: 8,
        title: 'Book 8',
        discountRate: 15,
        coverImage: '/Group26086594.svg', 
        price: 29.99,
      } ,{
        id: 9,
        title: 'Book 9',
        discountRate: 20,
        coverImage: '/Group26086594.svg', 
        price: 19.99,
      },
      {
        id: 10,
        title: 'Book 10',
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
      } ,{
        id: 2,
        title: 'Book 2',
        discountRate: 15,
        coverImage: '/Group26086594.svg', 
        price: 29.99,
      },
      {
          id: 3,
          title: 'Book 3',
          discountRate: 20,
          coverImage: '/Group26086594.svg', 
          price: 19.99,
        },
        {
          id: 4,
          title: 'Book 4',
          discountRate: 15,
          coverImage: '/Group26086594.svg', 
          price: 29.99,
        } ,{
          id: 5,
          title: 'Book 5',
          discountRate: 20,
          coverImage: '/Group26086594.svg', 
          price: 19.99,
        },
        {
          id: 6,
          title: 'Book 6',
          discountRate: 15,
          coverImage: '/Group26086594.svg', 
          price: 29.99,
        }, {
          id: 7,
          title: 'Book 7',
          discountRate: 20,
          coverImage: '/Group26086594.svg', 
          price: 19.99,
        },
        {
          id: 8,
          title: 'Book 8',
          discountRate: 15,
          coverImage: '/Group26086594.svg', 
          price: 29.99,
        } ,{
          id: 9,
          title: 'Book 9',
          discountRate: 20,
          coverImage: '/Group26086594.svg', 
          price: 19.99,
        },
        {
          id: 10,
          title: 'Book 10',
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
  
  // Simulate fetching books from an API
  export async function getBooks(page: number, pageSize: number): Promise<{ data: Book[] }> {
    // Calculate the start and end index for the current page
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
  
    // Check if there are books available for the current page
    if (startIndex >= books.length) {
      return { data: [] }; // No more books to load
    }
  
    // Slice the books array to get the books for the current page
    const paginatedBooks = books.slice(startIndex, endIndex);
  
    // Simulate an asynchronous API call using setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: paginatedBooks });
      }, 1000); // Simulate 1 second delay
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

  
  
  
  
  
  