<template>
  <div>
    <button
      class="fixed flex items-center justify-center w-10 h-10 transition-all bg-white border border-transparent rounded-full shadow-lg bottom-5 right-5 hover:border-black"
      @click="imprimir()"
    >
      <img
        class="w-6 h-6"
        src="../assets/print.png"
        alt
      />
    </button>
    <div class="h-screen overflow-auto space-y-7">
      <div
        id="print"
        class="flex flex-col"
      >
        <personal-component
          class="sticky top-0 z-10 sm:sticky"
          :info="info"
        />
        <div class="flex flex-col w-full p-1 m-auto space-y-6">
          <history
            class="pl-3"
            :history="{ name: 'Skils', content: '' }"
          />
          <div class="flex flex-col gap-3 pl-10">
            <skil
              class="pl-3"
              v-for="item in info.skillsFrontend" :key="item.tecName"
              :skil="{ name: item.tecName, stars: item.stars }"
            />
          </div>
          <history
            class="pl-10"
            v-for="history in info.histories"
            :key="history.name"
            :history="history"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../data";
// import html2pdf
import html2pdf from "html2pdf.js";

import History from "../components/History.vue";
import PersonalComponent from "../components/PersonalComponent.vue";
import Skil from "../components/Skil.vue";

export default {
  components: {
    History,
    PersonalComponent,
    Skil,
  },
  data() {
    return {
      info: data,
    };
  },
  methods: {
    imprimir() {
      // print a specific element
      const element = document.getElementById("print");
      html2pdf()
        .set({
          margin: 0.1,
          filename: "curriculum.pdf",
          image: {
            type: "jpeg",
            quality: 1,
          },
          html2canvas: {
            scale: 1.5, // A mayor escala, mejores gráficos, pero más peso
            letterRendering: true,
          },
          jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait", // landscape o portrait
          },
        })
        .from(element)
        .save();
    },
  },
};
</script>
