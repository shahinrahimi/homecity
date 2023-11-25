import { create } from "zustand";
import { persist, createJSONStorage  } from "zustand/middleware"

export const useAuthStore = create(
    persist(
        (set) => ({
            token: null,
            setToken: (token) => set({ token })        
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => sessionStorage)
        },
    )
)


export const useBlogStore = create(
    persist(
        (set) => ({
            blogs:[],
            setBlogs: (blogs) => set({ blogs }),
            getBlogById: (id) => {
                const blogs = useBlogStore.getState().blogs;
                return blogs.find((blog) => blog.id === id);
            }
        }),
        {
            name: 'blog-storage',
            storage: createJSONStorage(() => sessionStorage)
        },
    )
)




