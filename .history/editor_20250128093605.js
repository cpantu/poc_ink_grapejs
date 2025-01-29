document.addEventListener('DOMContentLoaded', () => {
    const editor = grapesjs.init({
        container: '#gjs',
        fromElement: false,
        storageManager: false,
        // Show blocks panel by default
        showOffsets: true,
        noticeOnUnload: false,
        height: '100%',
        width: 'auto',
        // Enable all features
        styleManager: {
            appendTo: '.styles-container',
            sectors: [{
                name: 'Dimensiones',
                open: false,
                buildProps: ['width', 'height', 'min-width', 'min-height', 'padding', 'margin']
            },
            {
                name: 'Tipografía',
                open: false,
                buildProps: ['font-family', 'font-size', 'font-weight', 'letter-spacing', 'color', 'line-height', 'text-align']
            },
            {
                name: 'Decoración',
                open: false,
                buildProps: ['background-color', 'border', 'border-radius', 'box-shadow']
            }]
        },
        layerManager: {
            appendTo: '.layers-container'
        },
        // Panel configuration
        // Enable full panel manager
        panels: {
            defaults: [
                {
                    id: 'panel-devices',
                    el: '.panel__devices',
                    buttons: [{
                        id: 'device-desktop',
                        label: 'Desktop',
                        command: 'set-device-desktop',
                        active: true,
                        togglable: false,
                    }, {
                        id: 'device-mobile',
                        label: 'Mobile',
                        command: 'set-device-mobile',
                        togglable: false,
                    }],
                },
                {
                    id: 'panel-switcher',
                    el: '.panel__switcher',
                    buttons: [{
                        id: 'show-layers',
                        active: true,
                        label: 'Capas',
                        command: 'show-layers',
                    }, {
                        id: 'show-style',
                        active: true,
                        label: 'Estilos',
                        command: 'show-styles',
                    }, {
                        id: 'show-traits',
                        active: true,
                        label: 'Propiedades',
                        command: 'show-traits',
                    }],
                }
            ]
        },
        deviceManager: {
            devices: [{
                name: 'Desktop',
                width: '', // Width not specified means full width
            }, {
                name: 'Mobile',
                width: '320px',
                widthMedia: '480px',
            }]
        },
        // Show blocks panel
        selectorManager: { componentFirst: true },
        blockManager: {
            appendTo: '#gjs',
            blocks: [
                {
                    id: 'header',
                    label: 'Encabezado',
                    category: 'Basico',
                    content: `
                        <header style="text-align: center; padding: 40px 0; background-color: #f8f9fa;">
                            <h1>Proyecto Inmobiliario</h1>
                            <p>Descripción del proyecto...</p>
                        </header>
                    `
                },
                {
                    id: 'section',
                    label: 'Sección',
                    category: 'Basico',
                    content: `
                        <section class="section">
                            <div class="container">
                                <h2>Nueva Sección</h2>
                                <p>Descripción de la sección...</p>
                            </div>
                        </section>
                    `
                },
                {
                    id: 'property-card',
                    label: 'Tarjeta de Propiedad',
                    category: 'Inmobiliaria',
                    content: `
                        <div class="property-card" style="border: 1px solid #ddd; padding: 15px; margin: 10px; border-radius: 8px; max-width: 300px;">
                            <img src="https://via.placeholder.com/300x200" style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px;">
                            <h3 style="margin: 10px 0;">Título de la Propiedad</h3>
                            <p style="color: #666;">Descripción corta de la propiedad</p>
                            <div style="color: #4CAF50; font-size: 1.2em; margin: 10px 0;">$000,000</div>
                            <button style="background: #4CAF50; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; width: 100%;">
                                Más Información
                            </button>
                        </div>
                    `
                },
                {
                    id: 'features',
                    label: 'Características',
                    category: 'Inmobiliaria',
                    content: `
                        <div class="features" style="display: flex; justify-content: space-around; padding: 20px; flex-wrap: wrap;">
                            <div style="text-align: center; padding: 10px;">
                                <i>🛏️</i>
                                <p>3 Dormitorios</p>
                            </div>
                            <div style="text-align: center; padding: 10px;">
                                <i>🚿</i>
                                <p>2 Baños</p>
                            </div>
                            <div style="text-align: center; padding: 10px;">
                                <i>🚗</i>
                                <p>2 Cocheras</p>
                            </div>
                            <div style="text-align: center; padding: 10px;">
                                <i>📏</i>
                                <p>200 m²</p>
                            </div>
                        </div>
                    `
                },
                {
                    id: 'gallery',
                    label: 'Galería',
                    category: 'Inmobiliaria',
                    content: `
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; padding: 20px;">
                            <img src="https://via.placeholder.com/300x200" style="width: 100%; border-radius: 4px;">
                            <img src="https://via.placeholder.com/300x200" style="width: 100%; border-radius: 4px;">
                            <img src="https://via.placeholder.com/300x200" style="width: 100%; border-radius: 4px;">
                            <img src="https://via.placeholder.com/300x200" style="width: 100%; border-radius: 4px;">
                        </div>
                    `
                },
                {
                    id: 'contact-form',
                    label: 'Formulario de Contacto',
                    category: 'Inmobiliaria',
                    content: `
                        <form style="max-width: 500px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                            <h3 style="text-align: center; margin-bottom: 20px;">Contactar</h3>
                            <div style="margin-bottom: 15px;">
                                <input type="text" placeholder="Nombre" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                            </div>
                            <div style="margin-bottom: 15px;">
                                <input type="email" placeholder="Email" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                            </div>
                            <div style="margin-bottom: 15px;">
                                <input type="tel" placeholder="Teléfono" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
                            </div>
                            <div style="margin-bottom: 15px;">
                                <textarea placeholder="Mensaje" style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; min-height: 100px;"></textarea>
                            </div>
                            <button type="submit" style="background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; width: 100%;">
                                Enviar Mensaje
                            </button>
                        </form>
                    `
                }
            ]
        },
        plugins: ['gjs-preset-webpage'],
        pluginsOpts: {
            'gjs-preset-webpage': {
                modalImportTitle: 'Importar',
                modalImportLabel: 'Pegar código HTML aquí',
                modalImportContent: ''
            }
        },
        canvas: {
            styles: [
                'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap'
            ]
        }
    });

    // Save button functionality
    const saveBtn = document.getElementById('save-btn');
    const outputContainer = document.getElementById('output-container');
    const htmlOutput = document.getElementById('html-output');
    const closeOutput = document.querySelector('.close-output');

    saveBtn.addEventListener('click', () => {
        // Get HTML without wrapper tags
        const html = editor.getHtml();
        const css = editor.getCss();
        
        // Combine HTML and CSS
        const output = `<style>${css}</style>${html}`;
        
        // Show output
        htmlOutput.value = output;
        outputContainer.style.display = 'block';
    });

    closeOutput.addEventListener('click', () => {
        outputContainer.style.display = 'none';
    });

    // Add custom styles for the editor
    editor.DomComponents.addType('property-card', {
        model: {
            defaults: {
                traits: [
                    {
                        type: 'text',
                        name: 'title',
                        label: 'Título'
                    },
                    {
                        type: 'text',
                        name: 'price',
                        label: 'Precio'
                    },
                    {
                        type: 'text',
                        name: 'description',
                        label: 'Descripción'
                    }
                ]
            }
        }
    });
});