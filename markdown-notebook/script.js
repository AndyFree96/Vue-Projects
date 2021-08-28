new Vue({
    el: "#notebook",
    
    data(){
        return {
            content: "This is a note.",
            notes: [],
        }
    },

    computed: {
        notePreview(){
            return marked(this.content);
        }
    },

    created(){
        this.content = localStorage.getItem("content") || 
            "You can write in **markdown**";
    },

    methods: {
        saveNote(val){
            console.log("saving note:", val);
            localStorage.setItem('content', val);
            this.reportOperation('saving');
        },
        
        reportOperation(opName){
            console.log("The ", opName, " operation was complete!");
        },
        addNote(){
            const time = Date.now();
            const note = {
                id: String(time),
                title: 'New note ' + (thie.notes.length + 1),
                content: '**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!',
                created: time,
                favorite: false,
            };
            this.notes.push(note);
        }
    },

    // 修改侦听器
    watch: {
        // 侦听content数据内容
        content: {
            handler(val, oldVval){
                this.saveNote(val);
            }
        }
    }
});
