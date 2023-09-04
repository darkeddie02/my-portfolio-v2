<template lang="">
  <div class="">
    <button
      @click="downloadFile"
      class="btn-md btn btn-outline-secondary no-outline"
    >
      Resume <i class="fas fa-download text-warning"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: "Download",
  methods: {
    downloadFile() {
      fetch("eddie-tomisin-resume.pdf").then((res) => {
        res.blob().then((blob) => {
          // Create new obj of PDF file
          const fileURL = window.URL.createObjectURL(blob);

          // Set various prop values
          let isalink = document.createElement("a");
          isalink.href = fileURL;
          isalink.download = "eddie-tomisin-resume.pdf";
          isalink.click();
        });
      });
    },
  },
};
</script>
<style lang=""></style>
