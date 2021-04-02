<template>
    <div class="course box-shadow">
        <div class="thumbnail">
            <n-link to="/" class="image">
                <img :src="course.image" :alt="course.title + 'Thumbnail'">
            </n-link>
        </div>
        <div class="info">
            <span class="price">{{ course.price }}</span>
            <h3 class="title">
                <n-link to="/">{{ course.title }}</n-link>
            </h3>
           
        </div>
    </div>
</template>

<script>
    export default {
        props: ['course']
    };
</script>