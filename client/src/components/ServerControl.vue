<template>
    <div class="w-full min-h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white">
        <h1 class="font-bold text-6xl tracking-wide">Minecraft Server Control</h1>
        <div class="flex flex-row space-x-12">
            <button class="px-6 py-2 border-2 border-green-600 my-10" @click="startServer">Start Server</button>
            <button class="px-6 py-2 border-2 border-red-600 my-10" @click="stopServer">Stop Server</button>
        </div>
        <p>{{ status }}</p>
    </div>
</template>
  
<script lang="ts">
  import { ref } from "vue";
  import axios from "axios";
  
  export default {
      setup() {
          const status = ref("");
  
          const startServer = async () => {
              try {
                  const res = await axios.post("http://localhost:3000/server/start");
                  status.value = res.data.status;
              } catch (err) {
                  status.value = "Error starting server";
              }
          };
  
          const stopServer = async () => {
              try {
                  const res = await axios.post("http://localhost:3000/server/stop");
                  status.value = res.data.status;
              } catch (err) {
                  status.value = "Error stopping server";
              }
          };
  
          return { startServer, stopServer, status };
      },
  };
</script>
  