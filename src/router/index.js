import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomsView from '../views/RoomsView.vue'
import FacilitiesView from '../views/FacilitiesView.vue'
import GalleryView from '../views/GalleryView.vue'
import PackagesView from '../views/PackagesView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  // Hash history avoids 404 errors when the static build is hosted on GitHub Pages.
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/rooms', name: 'rooms', component: RoomsView },
    { path: '/facilities', name: 'facilities', component: FacilitiesView },
    { path: '/gallery', name: 'gallery', component: GalleryView },
    { path: '/packages', name: 'packages', component: PackagesView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],
})

export default router
