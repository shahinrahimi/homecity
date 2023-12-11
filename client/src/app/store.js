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

export const useTagStore = create(
    (set) => ({
        tags:null,
        setTags: (tags) => set({ tags }),
        getTagById: (id) => {
            const tags = useTagStore.getState().tags;
            return tags.find((tag) => tag.id === id);
        }
    })
)

export const useFacilityStore = create(
    (set) => ({
        facilities:null,
        setFacilities: (facilities) => set({ facilities }),
        getFacilityById: (id) => {
            const facilities = useFacilityStore.getState().facilities;
            return facilities.find((facility) => facility.id === id);
        }
    })
)

export const useBlogStore = create(
    (set) => ({
        blogs:null,
        setBlogs: (blogs) => set({ blogs }),
        getBlogById: (id) => {
            const blogs = useBlogStore.getState().blogs;
            return blogs.find((blog) => blog.id === id);
        }
    }),
)


export const useProjectStore = create(
    (set) => ({
        projects:null,
        setProjects: (projects) => set({ projects }),
        getProjectById: (id) => {
            const projects = useProjectStore.getState().projects;
            return projects.find((project) => project.id === id);
        }
    }),
)

export const useFranchiseStore = create(
    (set) => ({
        franchises:null,
        setFranchises: (franchises) => set({ franchises }),
        getFranchiseById: (id) => {
            const franchises = useFranchiseStore.getState().franchises;
            return franchises.find((franchise) => franchise.id === id);
        }
    }),
)





