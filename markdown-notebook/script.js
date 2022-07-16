Vue.filter("date", (time) => moment(time).format("DD/MM/YY, HH:mm"));

new Vue({
  el: "#notebook",

  data() {
    return {
      notes: JSON.parse(localStorage.getItem("notes")) || [],
      // 选中笔记的ID
      selectedId: localStorage.getItem("selected-id") || null,
    };
  },

  computed: {
    linesCount() {
      if (this.selectedNote) {
        // 计算换行符的个数
        return this.selectedNote.content.split(/\r\n|\r|\n/).length;
      }
    },

    wordsCount() {
      if (this.selectedNote) {
        let s = this.selectedNote.content;
        // 将换行符替换为空格
        s = s.replace(/\n/g, " ");
        // 排除开头和结尾的空格
        s = s.replace(/(^\s*)|(\s*$)/gi, "");
        // 将多个重复空格转换为一个
        s = s.replace(/\s\s+/gi, " ");
        // 返回空格数量
        return s.split(" ").length;
      }
    },

    charactersCount() {
      if (this.selectedNote) {
        return this.selectedNote.content.split("").length;
      }
    },

    sortedNotes() {
      return this.notes
        .slice()
        .sort((a, b) => a.created - b.created)
        .sort((a, b) => (a.favorite === b.favorite ? 0 : a.favorite ? -1 : 1));
    },

    notePreview() {
      return this.selectedNote ? marked.parse(this.selectedNote.content) : "";
    },

    addButtonTitle() {
      return this.notes.length + " note(s) already";
    },

    selectedNote() {
      return this.notes.find((note) => note.id === this.selectedId);
    },
  },

  created() {},

  methods: {
    reportOperation(opName) {
      console.log("The ", opName, " operation was complete!");
    },

    addNote() {
      const time = Date.now();
      const note = {
        id: String(time),
        title: "New note " + (this.notes.length + 1),
        content:
          "**Hi!** This notebook is using [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for formatting!",
        created: time,
        favorite: false,
      };
      this.notes.push(note);
    },

    selectNote(note) {
      this.selectedId = note.id;
    },

    saveNotes() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
      console.log("Notes saved!", new Date());
    },

    removeNote() {
      if (this.selectedNote && confirm("Delete the note?")) {
        // 将选中笔记从笔记列表中移除
        const index = this.notes.indexOf(this.selectedNote);
        if (index !== -1) {
          this.notes.splice(index, 1);
        }
      }
    },

    favoriteNote() {
      this.selectedNote.favorite = !this.selectedNote.favorite;
    },
  },

  // 侦听器
  watch: {
    notes: {
      handler: "saveNotes",
      deep: true,
    },

    selectedId(val) {
      localStorage.setItem("selected-id", val);
    },
  },
});
