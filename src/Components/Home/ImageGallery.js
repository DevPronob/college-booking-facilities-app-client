import React, { useState, useCallback } from "react";

const ImageGallery = () => {
    const photos = [
        {
          src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          width: 3,
          height: 2
        },
        {
          src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          width: 3,
          height: 2
        },
        {
          src: "https://media.gettyimages.com/id/946972428/photo/graduation-is-finally-here.webp?s=1024x1024&w=gi&k=20&c=FU48ZwXmPz_WZ0DxFuV4EoBKj9Z9p271u1Z3yS5hWA4=",
          width: 4,
          height: 3
        },
        {
          src: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          width: 3,
          height: 2
        },
        {
          src: "https://media.istockphoto.com/id/858465248/photo/amazing-things-happen-when-you-work-hard.jpg?s=1024x1024&w=is&k=20&c=FLBW40w7vA3pXd5Ku3FS6nLEUhnmDPf-uODrkpBwXEs=",
          width: 3,
          height: 2
        },
        {
          src: "https://media.gettyimages.com/id/946972148/photo/group-of-students-in-the-lecture-hall-with-notebooks.jpg?s=1024x1024&w=gi&k=20&c=8miGh7BeKLjNUTYLamILOazhMY1HfAKwo6wGA_rnS7M=",
          width: 4,
          height: 3
        },
        {
          src: "https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80",
          width: 3,
          height: 2
        },
        {
          src: "https://media.gettyimages.com/id/643137108/photo/ecstatic-group-enjoying-the-party.jpg?s=1024x1024&w=gi&k=20&c=h9DOJVtSl3Y9xg5QCJ6MMa9u4gGT9RbO5sUiGOQFFJY=",
          width: 3,
          height: 2
        },
        {
          src: "https://images.unsplash.com/photo-1496469888073-80de7e952517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
          width: 4,
          height: 3
        }
      ];

  
    return (
        <div>
            <section class="py-12">
  <div class="mx-auto max-w-md px-4 md:max-w-2xl lg:max-w-screen-lg">
    <h1 class="mb-12 text-center text-3xl font-bold">College Graduates' Group Pictures</h1>
    <div class="mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      
      {photos.map((college, index) => (
        <div class="flex flex-col overflow-hidden rounded shadow-md">
          <img src={college.src} class="h-56 w-full object-cover" />
          </div>
        ))}
        
      
    </div>
  </div>
</section>

         </div>
    );
}

export default ImageGallery;
