<template lang="">
  <div class="">
    <button
      @click="downloadFile"
      class="btn-md btn btn-outline-secondary no-outline"
    >
      Download Resume <i class="fas fa-download text-warning"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: "Download",
  methods: {
    downloadFile() {
      fetch("eddietechieresume.pdf").then((res) => {
        res.blob().then((blob) => {
          // Create new obj of PDF file
          const fileURL = window.URL.createObjectURL(blob);

          // Set various prop values
          let isalink = document.createElement("a");
          isalink.href = fileURL;
          // isalink.setAttribute("download", "eddietechieresume.pdf")
          // document.body.appendChild(isalink)
          isalink.download = "eddietechieresume.pdf";
          isalink.click();
        });
      });
    },
  },
};
</script>
<style lang=""></style>
