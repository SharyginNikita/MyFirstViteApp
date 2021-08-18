// import Layout from "@/components/routers/Layout.vue";
// import Patient from "@/components/routers/Patient.vue";
// import Admin from "@/components/routers/Admin.vue";

// import AuthPage from "@/components/views/AuthPage.vue";
// import DoctorList from "@/components/views/DoctorList.vue";
// import DoctorProfile from "@/components/views/DoctorProfile.vue";
// import DoctorCreate from "@/components/views/DoctorCreate.vue";
// import PatientsList from "@/components/views/PatientsList.vue";
// import PatientProfile from "@/components/views/PatientProfile.vue";
// import PatientGraph from "@/components/views/PatientGraph.vue";
// import PasswordChange from "@/components/views/PasswordChange.vue";
// import LogPage from "@/components/views/LogPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/auth",
        component: () => import("@/components/views/AuthPage.vue"),
    },
    {
        path: "/",
        component: () => import("@/components/routers/Layout.vue"),
        children: [
            {
                path: "",
                component: () => import("@/components/routers/Patient.vue"),
                children: [
                    {
                        path: "",
                        component: () =>
                            import("@/components/views/PatientsList.vue"),
                    },
                    {
                        path: "profile/:id",
                        component: () =>
                            import("@/components/views/PatientProfile.vue"),
                        name: "patientProfile",
                    },
                    {
                        path: "graph/:id",
                        component: () =>
                            import("@/components/views/PatientGraph.vue"),
                    },
                ],
            },
            {
                path: "admin",
                component: () => import("@/components/routers/Admin.vue"),
                children: [
                    {
                        path: "",
                        component: () =>
                            import("@/components/views/DoctorList.vue"),
                        name: "doctorList",
                    },
                    {
                        path: "profile/:id",
                        component: () =>
                            import("@/components/views/DoctorProfile.vue"),
                        name: "doctorProfile",
                    },
                    {
                        path: "create",
                        component: () =>
                            import("@/components/views/DoctorCreate.vue"),
                    },
                    {
                        path: "password/:id",
                        component: () =>
                            import("@/components/views/PasswordChange.vue"),
                        name: "passwordChange",
                    },
                ],
            },
            {
                path: "log",
                component: () => import("@/components/views/LogPage.vue"),
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/components/views/AuthPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;
