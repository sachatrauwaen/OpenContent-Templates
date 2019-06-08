(function ($) {
    $(document).ready(function () {
        initApp(document);
    });
    $(document).on("opencontent.change", function (event, element) {
        initApp(element);
    });
    function initApp(element) {
        $(".live-edit", element).each(function () {
            var moduleid = $(this).attr('data-moduleid');
            var opencontentData = window.openContent[moduleid];
            var id = opencontentData.Context.Id;
            var sf = $.ServicesFramework(moduleid);
            var elId = $(this).attr('id');

            // Live Image Editor
            var liveImageEditor = {
                props: {
                    value: String
                },
                data: function () {
                    return {
                        postAction: '',
                        files: [],
                        headers: {}
                    };
                },
                template: '<div style="width:100%;height:200px;border:dashed 2px #0094ff;padding:20px">\
                                <label for="imageupload">\
                                    <p>Drop or click to upload</p>\
                                 </label>\
                                <file-upload v-show="true"  \
                                  extensions="gif,jpg,jpeg,png,webp"\
                                  accept="image/png,image/gif,image/jpeg,image/webp"\
                                  :size="1024 * 1024 * 10"\
                                    class="btn btn-default"\
                                    name="imageupload"\
                                  :post-action="postAction"\
                                    :headers="headers"\
                                    :drop = "true"\
                                    v-model="files"\
                                @input-filter="inputFilter"\
                                @input-file="inputFile"\
                                ref="upload" >\
                                Upload Image\
                                </file-upload>\
                                <button class="btn btn-default" @click.prevent="cancel">Cancel</button>\
                            </div>',
                computed: {
                    model: {
                        get: function () {
                            return this.value;
                        },
                        set: function (val) {
                            this.$emit("input", val);
                        }
                    }
                },
                methods: {
                    inputFilter: function (newFile, oldFile, prevent) {
                        if (newFile && !oldFile) {
                            // Before adding a file
                            // Filter system files or hide files
                            if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
                                return prevent();
                            }
                            // Filter php html js file
                            if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
                                return prevent();
                            }

                        }
                    },
                    inputFile: function (newFile, oldFile) {
                        if (newFile && !oldFile) {
                            // add
                            console.log('add', newFile);
                        }
                        if (newFile && oldFile) {
                            // update
                            console.log('update', newFile);
                            if (newFile.success !== oldFile.success) {
                                console.log('success', newFile.success, newFile);
                                this.model = JSON.parse(newFile.response)[0].url;
                                this.$emit('save');
                            }
                        }
                        if (!newFile && oldFile) {
                            // remove
                            console.log('remove', oldFile);
                        }
                        // Automatic upload
                        if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
                            if (!this.$refs.upload.active) {
                                this.$refs.upload.active = true;
                            }
                        }
                    },
                    cancel: function () {
                        this.$emit('cancel');
                    }
                },
                created: function () {
                    this.postAction = sf.getServiceRoot('OpenContent') + "FileUpload/UploadFile";
                    var xhr = {
                        headers: {},
                        setRequestHeader: function (key, val) {
                            this.headers[key] = val;
                        }
                    };
                    sf.setModuleHeaders(xhr);
                    this.headers = xhr.headers;
                },
                components: {
                    fileUpload: VueUploadComponent
                }
            };
            // Live Image Editor
            var liveTextEditor = {
                props: {
                    value: String
                },
                data: function () {
                    return {
                        disableBlur: false
                    };
                },
                template: '<input ref="input" type="text" v-model="model"  @keydown.enter.stop.prevent="save" @keydown.esc.stop.prevent="cancel"  @blur="onBlur($event)"  />',
                computed: {
                    model: {
                        get: function () {
                            return this.value;
                        },
                        set: function (val) {
                            this.$emit("input", val);
                        }
                    }
                },
                methods: {
                    save: function () {
                        this.disableBlur = true;
                        this.$emit('save');
                    },
                    cancel: function () {
                        this.disableBlur = true;
                        this.$emit('cancel');
                    },
                    onBlur: function () {
                        if (!this.disableBlur)
                            this.$emit('save');
                    }
                },
                mounted: function () {
                    this.$refs.input.focus();
                }
            };
            // Live Select Editor
            var liveSelectEditor = {
                props: {
                    value: String,
                    schema: {},
                    options: {}
                },
                data: function () {
                    return {
                    };
                },
                template: '<select ref="select" v-model="model" @change="save" @blur="cancel" >\
                                    <option v-for="(option, index) in schema.enum" :value="option">{{optionLabel(index)}}</option>\
                                </select>',
                computed: {
                    model: {
                        get: function () {
                            return this.value;
                        },
                        set: function (val) {
                            this.$emit("input", val);
                        }
                    }
                },
                methods: {
                    save: function () {
                        this.$emit('save');
                    },
                    cancel: function () {
                        this.disableBlur = true;
                        this.$emit('cancel');
                    },
                    optionLabel: function (index) {
                        if (this.options.optionLabels && this.options.optionLabels[index])
                            return this.options.optionLabels[index];
                        else
                            return this.schema.enum[index];
                    }
                },
                mounted: function () {
                    this.$refs.select.focus();
                }
            };
            // Live CKEditor Editor
            var liveCkeditorEditor = {
                props: {
                    value: String,
                    schema: {},
                    options: {}
                },
                template: '<vue-ckeditor v-model="model" types="inline" :config="config"  @blur="onBlur" ></vue-ckeditor>',
                data: function () {

                    return {
                        config: {
                            startupFocus: true,
                            toolbar: [
                                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
                                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock',] },
                                { name: 'links', items: ['Link', 'Unlink'] }
                            ],
                            // Set the most common block elements.
                            format_tags: 'p;h1;h2;h3;pre',
                            // Simplify the dialog windows.
                            removeDialogTabs: 'image:advanced;link:advanced',
                            // Remove one plugin.
                            removePlugins: 'elementspath,easyimage,cloudservices'
                            //extraPlugins: 'dnnpages',   
                        }
                    };
                },
                computed: {
                    model: {
                        get: function () {
                            return this.value;
                        },
                        set: function (val) {
                            this.$emit("input", val);
                        }
                    }
                },
                methods: {
                    onBlur: function () {
                        this.$emit('save');
                    }
                },
                components: {
                    VueCkeditor: VueCkeditor
                }
            };
            // Live Edit component
            var liveEdit = {
                props: {
                    value: String,
                    schema: Object,
                    options: Object
                },
                data: function () {
                    return {
                        editedValue: '',
                        editmode: false
                    };
                },
                template: '<div>\
                            <div v-if="editmode" >\
                                <component :is="currentEditor" v-model="editedValue" \
                                    @save="save" @cancel="cancel" :schema="schema" :options="options" />\
                            </div>\
                            <div @click="edit" v-else class="live-field" >\
                                <slot v-if="value" ></slot>\
                                <div v-else>[{{schema.title}}]</div>\
                            </div>\
                          </div>',
                computed: {
                    currentEditor: function () {
                        return "live-" + this.options.type + "-editor";
                    }
                },
                methods: {
                    edit: function () {
                        this.editedValue = this.value;
                        this.editmode = true;
                    },
                    save: function () {
                        this.$emit('input', this.editedValue);
                        this.$root.$emit('save');
                        this.editmode = false;
                    },
                    cancel: function () {
                        this.editmode = false;
                    }
                },
                components: {
                    liveImageEditor: liveImageEditor,
                    liveTextEditor: liveTextEditor,
                    liveSelectEditor: liveSelectEditor,
                    liveCkeditorEditor: liveCkeditorEditor
                }
            };
            // Vue App
            var app = new Vue({
                el: '#' + elId,
                //template:'...',
                data: opencontentData,
                created: function () {
                    this.$on('save', function (success) {
                        this.save(success);
                    });
                },
                computed: {
                    colSchema: function () {
                        return this.Schema.properties.Columns.items.properties;
                    },
                    colOptions: function () {
                        return this.Options.fields.Columns.items.fields;
                    }
                },
                methods: {
                    add: function (arr) {
                        var obj = {};
                        for (const key in this.colSchema) {
                            obj[key] = '';
                        }
                        arr.push(obj);
                    },
                    remove: function (arr, index) {
                        arr.splice(index, 1);
                        this.save();
                    },
                    save: function () {
                        var json = Object.assign({}, this.$data);
                        delete json.Context;
                        delete json.Schema;
                        delete json.Options;
                        delete json.Settings;
                        $.ajax({
                            type: "PUT",
                            url: sf.getServiceRoot('OpenContent') + "Rest/v2/Items/" + id,
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            data: JSON.stringify({ item: json }),
                            beforeSend: sf.setModuleHeaders
                        }).done(function (data) {
                        }).fail(function (xhr, result, status) {
                            console.error("Uh-oh, something broke: " + status);
                        });
                    }
                },
                components: {
                    liveEdit: liveEdit,
                    SlickList: VueSlicksort.SlickList,
                    SlickItem: VueSlicksort.SlickItem
                },
                directives: {
                    handle: VueSlicksort.HandleDirective
                }
            });
        });
    }
}(jQuery));