<template>
  <Section id="timeline" txt="tempus fugit..." class="">
    <div class="p-2 flex flex-col size-full place-items-center">
      <div class="relative h-full space-y-2">
        <h3 class="text-4xl text-sky-300 text-end lg:-translate-x-32">2025</h3>

        <div
          class="absolute left-[30px] lg:left-1/2 inset-0 w-0 h-full border-l-4 border-neutral-600 -z-10"
        ></div>

        <div
          class="relative grid grid-cols-[auto_1fr] lg:flex lg:flex-col gap-y-8 lg:gap-y-32 gap-x-2 max-w-lg place-self-center"
        >
          <img
            class="size-16 place-self-center border-4 border-neutral-600 rounded-full bg-neutral-950"
            src="~/assets/images/USU.webp"
            alt=""
          />
          <div
            class="bg-neutral-800 flex flex-col p-2 rounded-xs rounded-br-xl lg:rounded-br-xs lg:absolute lg:translate-x-48 lg:min-w-64 lg:place-self-center"
          >
            <p class="">Started studying at Universitas Sumatera Utara</p>
            <time
              class="text-neutral-300 text-sm lg:absolute lg:-translate-x-72 lg:bg-neutral-800 lg:rounded-xs lg:p-2 lg:place-self-center"
              datetime="2025-08-28"
              >August</time
            >
          </div>

          <img
            class="size-16 place-self-center border-4 border-neutral-600 rounded-full bg-neutral-950"
            src="~/assets/images/GDGoC.webp"
            alt=""
          />
          <div
            class="bg-neutral-800 flex flex-col p-2 rounded-xs rounded-br-xl lg:rounded-br-xs lg:absolute lg:-translate-x-48 lg:translate-y-48 lg:min-w-64 lg:place-self-center"
          >
            <p class="lg:text-end">Selected by GDGoC USU as a member</p>
            <time
              class="text-neutral-300 text-sm lg:absolute lg:translate-x-72 lg:bg-neutral-800 lg:rounded-xs lg:p-2 lg:place-self-center"
              datetime="2025-10-18"
              >October</time
            >
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
