document.addEventListener('DOMContentLoaded', () => {
    const editor = grapesjs.init({
        container: '#gjs',
        fromElement: false,
        storageManager: false,
        panels: {
            defaults: [{
                id: 'basic-actions',
                el: '.panel__basic-actions',
                buttons: [
                    {
                        id: 'visibility',
                        active: true,
                        className: 'btn-toggle-borders',
                        label: '<u>B</u>',
                        command: 'sw-visibility',
                    },
                ]
            }]
        },
        blockManager: {
            appendTo: '#blocks',
            blocks: [
                {
                    id: 'section',
                    label: 'Sección',
                    category: 'Basic',
                    content: `
                        <section class="section">
                            <div class="container">
                                <h2>Nueva Sección</h2>
                                <p>Descripción de la sección...</p>
                            </div>
                        </section>
                    `,
                },
                {
                    id: 'property-card',
                    label: 'Tarjeta de Propiedad',
                    category: 'Real Estate',
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
                    `,
                },
                {
                    id: 'features',
                    label: 'Características',
                    category: 'Real Estate',
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
                    `,
                },
                {
                    id: 'gallery',
                    label: 'Galería',
                    category: 'Real Estate',
                    content: `
                        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; padding: 20px;">
                            <img src="https://via.placeholder.com/300x200" style="width: 100%; border-radius: 4px;">
                            <img src="https://via.placeholder.com/300x200" style="width: 100%; border-radius: 4px;">
                            <img src="https://via.placeholder.com/300x200" style="width: 100%; border-radius: 4px;">
                            <img src="https://via.placeholder.com/300x200" style="width: 100%; border-radius: 4px;">
                        </div>
                    `,
                },
                {
                    id: 'contact-form',
                    label: 'Formulario de Contacto',
                    category: 'Real Estate',
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
                    `,
                }
            ]
        },
        plugins: ['gjs-preset-webpage'],
        pluginsOpts: {
            'gjs-preset-webpage': {
                modalImportTitle: 'Importar',
                modalImportLabel: 'Pegar código HTML aquí',
                modalImportContent: '',
            }
        },
        canvas: {
            styles: [
                'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
            ],
        },
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
                        label: 'Título',
                    },
                    {
                        type: 'text',
                        name: 'price',
                        label: 'Precio',
                    },
                    {
                        type: 'text',
                        name: 'description',
                        label: 'Descripción',
                    },
                ],
            }
        }
    });
});