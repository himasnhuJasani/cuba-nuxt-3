<template>
    <div>
        <Breadcrumbs main="Editor" title="Simple Editor"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                      <h5 class="card-title">Simple Editor</h5>
                    </div>
                    <div class="card-body">
                      <ClientOnly>
                        <quill-editor
                        v-model:value="state.content"
                        :options="state.editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)"
                        @change="onEditorChange($event)"
                      />     
                      </ClientOnly>
                                    </div>
                </div>
              </div>

            </div>
        </div>
        <!-- Container-fluid Ends-->
    </div>
</template>

<script>
// import { quillEditor } from 'vue3-quill'
import { quillEditor } from 'vue3-quill'

// import customQuillModule from 'customQuillModule'
// Quill.register('modules/customQuillModule', customQuillModule)
 import { reactive } from 'vue'
export default {
  components:{
    quillEditor

  },
    setup() {
    const state = reactive({
      content: '<h1>Some initial content</h1>',
      _content: '',
      editorOption: {
        placeholder: 'core',
      },
      disabled: false
    })

    const onEditorBlur = (quill) => {
    }
    const onEditorFocus = (quill) => {
    }
    const onEditorReady = (quill) => {
    }
    const onEditorChange = ({ quill, html, text }) => {
      state._content = html
    }

    setTimeout(() => {
      state.disabled = true
    }, 2000)

    return { state, onEditorBlur, onEditorFocus, onEditorReady, onEditorChange }
  },
};
</script>