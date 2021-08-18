<template>
  <router-view />
</template>

<script>
export default {
    created() {
        const basic = localStorage.getItem("basic");

        if (!basic) {
            this.$router.replace({ path: "/auth" });
        }
    },
};
</script>
