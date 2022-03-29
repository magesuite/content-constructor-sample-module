import $t from 'mage/translate';

import componentConfigurator from 'components/_component-configurator/component-configurator';

/**
 * Hello World component interface.
 */
interface IComponentSettings {
    title?: string;
}

/**
 * Hello World configurator component.
 * This component is responsible for displaying Hello Worlds' configuration modal
 * @type {vuejs.ComponentOption} Vue component object.
 */
const helloWorldConfigurator: vuejs.ComponentOption = {
    mixins: [
        componentConfigurator,
    ],
    template: `<div class="cc-hello-world-configurator {{ classes }} | {{ mix }}" {{ attributes }}>
        <section class="cc-hello-world-configurator__section" v-if="ccConfig.hello-world != null && ccConfig.hello-world.custom_sections != null" v-for="section in ccConfig.hello-world.custom_sections">
            <h3 class="cc-hello-world-configurator__subtitle" v-if="section.label">{{section.label | translate}}</h3>
            <div class="cc-custom-fields">
                <div class="cc-custom-fields__form-group" v-for="field in section.content.fields">
                    <component
                        :is="'custom-element-' + field.type"
                        :configuration="configuration"
                        :field-configuration="field"
                    ></component>
                </div>
            </div>
        </section>

        <div class="cc-input cc-input--type-inline">
            <label for="cfg-hello-world" class="cc-input__label">${ $t('Hello world') }:</label>
            <input type="text" v-model="configuration.title" id="cfg-hello-world" class="cc-input__input" @change="onChange">
        </div>
    </div>`,
    props: {
        configuration: {
            type: Object,
            default(): any {
                return {
                    customCssClass: '',
                    title: '',
                };
            },
        },
        /* Set prop with component name in order to
         * pass it to `component-configurator` methods
        */
        xmlConfigEntry: {
            type: String,
            default: 'hello-world',
        },
    },
    events: {
        /**
         * Listen on save event from Content Configurator component.
         */
        'component-configurator__save'(): void {
            this.onSave();
        },
    }
};

export default helloWorldConfigurator;
