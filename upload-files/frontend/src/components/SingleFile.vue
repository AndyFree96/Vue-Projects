<template>
    <div class="single-file-container">
        <div>
            <h2>Single File</h2>
            <hr>
            <label>File
                <input type="file" @change="handleFileUpload($event)">
            </label>
            <br>
            <button @click="submitFile()">Submit</button>
            <div>
                {{ uploadResult }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    data () {
        return {
            file: "",
            uploadResult: "",
        }
    },
    
    methods: {
        handleFileUpload(event){
            this.file = event.target.files[0];
        },

        submitFile(){
            let formData = new FormData();
            formData.append('file', this.file);
            axios.post(`${process.env.VUE_APP_API}/single-file`, formData, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }).then(response => {
                console.log("Success");
                this.uploadResult = response.data;
            }).catch(() => {
                console.log("Failure");
            });
        }
    }
}
</script>

<style scoped>

</style>