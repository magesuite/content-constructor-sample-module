/**
 * Single component information interface.
 */
 interface IComponentInformation {
    title: string;
    subtitle: string;
}

/**
 * Hello World preview component.
 * This component is responsible for displaying preview of Hello World component in Layout Builder (admin panel)
 * @type {vuejs.ComponentOption} Vue component object.
 */
const helloWorldPreview: vuejs.ComponentOption = {
    template: `<div class="cc-hello-world-preview">
        <h1 class="cc-hello-world-preview__hello-world">
            <span>Hello</span>
            {{ configuration.title }}
        </h1>
    </div>`,
    props: {
        /**
         * Single's component configuration
         */
        configuration: {
            type: Object,
        },
        /**
         * Class property support to enable BEM mixes.
         */
        class: {
            type: [String, Object, Array],
            default: '',
        },
    },
};

export default helloWorldPreview;
