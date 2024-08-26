import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mechkeys-server.vercel.app' }),
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: (formData) => ({
        url: image_hosting_api,
        method: 'POST',
        body: formData,
      }),
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: '/api/products',
        method: 'POST',
        body: product,
      }),
    }),
    getProducts: builder.query({
      query: ({ search = '', brand = '', minPrice = '', maxPrice = '', sort = '' }) => {
        const params = new URLSearchParams();
        if (search) params.append('search', search);
        if (brand) params.append('brand', brand);
        if (minPrice) params.append('minPrice', minPrice);
        if (maxPrice) params.append('maxPrice', maxPrice);
        if (sort) params.append('sort', sort);
        return {
          url: `/api/products?${params.toString()}`,
          method: 'GET',
        };
      },
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/api/product/${id}`,
        method: 'GET',
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/api/products/${id}`,
        method: 'PATCH',
        body: rest,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/api/products/${id}`,
        method: 'DELETE',
      }),
    }),
    addToCart: builder.mutation({
      query: ({ productId, quantity }) => ({
        url: '/api/carts',
        method: 'POST',
        body: { productId, quantity },
      }),
    }),
    getCart: builder.query({
      query: () => ({
        url: '/api/carts',
        method: 'GET',
      }),
    }),
    updateCart: builder.mutation({
      query: ({ productId, quantity }) => ({
        url: `/api/carts/${productId}`,
        method: 'PATCH',
        body: { quantity },
      }),
    }),
    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `/api/carts/${productId}`,
        method: 'DELETE',
      }),
    }),
    placeOrder: builder.mutation({
      query: (orderDetails) => ({
        url: '/api/orders',
        method: 'POST',
        body: orderDetails,
      }),
    }),
  }),
});

export const {
  useUploadImageMutation,
  useCreateProductMutation,
  useGetProductsQuery,
  useGetProductByIdQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useAddToCartMutation,
  useGetCartQuery,
  useUpdateCartMutation,
  useRemoveFromCartMutation,
  usePlaceOrderMutation,
} = baseApi;
