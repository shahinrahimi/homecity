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
    persist(
        (set) => ({
            tags:[],
            setTags: (tags) => set({ tags }),
            getTagById: (id) => {
                const tags = useTagStore.getState().tags;
                return tags.find((tag) => tag.id === id);
            }
        }),
        {
            name: 'tag-storage',
            storage: createJSONStorage(() => sessionStorage)
        },
    )
)

export const useFacilityStore = create(
    persist(
        (set) => ({
            facilities:[],
            setFacilities: (facilities) => set({ facilities }),
            getFacilityById: (id) => {
                const facilities = useFacilityStore.getState().facilities;
                return facilities.find((facility) => facility.id === id);
            }
        }),
        {
            name: 'facility-storage',
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


export const useProjectStore = create(
    persist(
        (set) => ({
            projects:[],
            setProjects: (projects) => set({ projects }),
            getProjectById: (id) => {
                const projects = useProjectStore.getState().projects;
                return projects.find((project) => project.id === id);
            }
        }),
        {
            name: 'project-storage',
            storage: createJSONStorage(() => sessionStorage)
        },
    )
)





