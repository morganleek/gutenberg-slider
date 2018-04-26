!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"name",function(){return g}),n.d(t,"settings",function(){return f});var r=n(1),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=lodash,o=i.filter,l=i.every,c=wp.i18n.__,s=wp.utils.mediaUpload,u=wp.blocks,p=u.registerBlockType,m=u.createBlock,d={images:{type:"array",default:[],source:"query",selector:"ul.wp-block-gallery .blocks-gallery-item",query:{url:{source:"attribute",selector:"img",attribute:"src"},link:{source:"attribute",selector:"img",attribute:"data-link"},alt:{source:"attribute",selector:"img",attribute:"alt",default:""},id:{source:"attribute",selector:"img",attribute:"data-id"},caption:{type:"array",source:"children",selector:"figcaption"}}},imageCrop:{type:"boolean",default:!0},linkTo:{type:"string",default:"none"}},g="occ/slider",f={title:c("Slider","gutenberg-slider"),description:c("Image silders are a great way to share groups of pictures on your site.","gutenberg-slider"),icon:"format-gallery",category:"common",keywords:[c("images"),c("photos")],attributes:d,transforms:{from:[{type:"block",isMultiBlock:!0,blocks:["occ/slider"],transform:function(e){var t=o(e,function(e){var t=e.id,n=e.url;return t&&n});return t.length>0?m("occ/slider",{images:t.map(function(e){return{id:e.id,url:e.url,alt:e.alt,caption:e.caption}})}):m("occ/slider")}},{type:"shortcode",tag:"gallery",attributes:{images:{type:"array",shortcode:function(e){var t=e.named.ids;return t?t.split(",").map(function(e){return{id:parseInt(e,10)}}):[]}},linkTo:{type:"string",shortcode:function(e){var t=e.named.link,n=void 0===t?"attachment":t;return"file"===n?"media":n}}}},{type:"files",isMatch:function(e){return 1!==e.length&&l(e,function(e){return 0===e.type.indexOf("image/")})},transform:function(e,t){var n=m("occ/slider");return s(e,function(e){return t(n.uid,{images:e})},"image"),n}}],to:[{type:"block",blocks:["core/image"],transform:function(e){var t=e.images;return t.length>0?t.map(function(e){var t=e.id,n=e.url,r=e.alt,a=e.caption;return m("core/image",{id:t,url:n,alt:r,caption:a})}):m("core/image")}}]},edit:r.a,save:function(e){var t=e.attributes,n=t.images,r=t.imageCrop,a=t.linkTo;return wp.element.createElement("ul",{className:r?"is-cropped":""},n.map(function(e){var t=void 0;switch(a){case"media":t=e.url;break;case"attachment":t=e.link}var n=wp.element.createElement("img",{src:e.url,alt:e.alt,"data-id":e.id,"data-link":e.link});return wp.element.createElement("li",{key:e.id||e.url,className:"blocks-gallery-item"},wp.element.createElement("figure",null,t?wp.element.createElement("a",{href:t},n):n,e.caption&&e.caption.length>0&&wp.element.createElement("figcaption",null,e.caption)))}))},deprecated:[{attributes:a({},d,{images:a({},d.images,{selector:"div.wp-block-gallery figure.blocks-gallery-image img"})}),save:function(e){var t=e.attributes,n=t.images,r=t.imageCrop,a=t.linkTo;return wp.element.createElement("div",{className:r?"is-cropped":""},n.map(function(e){var t=void 0;switch(a){case"media":t=e.url;break;case"attachment":t=e.link}var n=wp.element.createElement("img",{src:e.url,alt:e.alt,"data-id":e.id});return wp.element.createElement("figure",{key:e.id||e.url,className:"blocks-gallery-image"},t?wp.element.createElement("a",{href:t},n):n)}))}}]};p(g,f)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(2),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=lodash,p=u.filter,m=u.pick,d=wp.element,g=d.Component,f=d.Fragment,b=wp.i18n.__,h=wp.utils.mediaUpload,y=wp.components,v=y.IconButton,w=y.DropZone,k=y.FormFileUpload,S=y.PanelBody,E=(y.RangeControl,y.SelectControl),C=y.ToggleControl,I=y.Toolbar,_=wp.blocks,O=(_.registerBlockType,_.MediaUpload),T=_.ImagePlaceholder,A=_.InspectorControls,j=_.BlockControls,P=[{value:"attachment",label:b("Attachment Page")},{value:"media",label:b("Media File")},{value:"none",label:b("None")}],F=function(e){function t(){a(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onSelectImage=e.onSelectImage.bind(e),e.onSelectImages=e.onSelectImages.bind(e),e.setLinkTo=e.setLinkTo.bind(e),e.toggleImageCrop=e.toggleImageCrop.bind(e),e.onRemoveImage=e.onRemoveImage.bind(e),e.setImageAttributes=e.setImageAttributes.bind(e),e.addFiles=e.addFiles.bind(e),e.uploadFromFiles=e.uploadFromFiles.bind(e),e.state={selectedImage:null},e}return o(t,e),s(t,[{key:"onSelectImage",value:function(e){var t=this;return function(){t.state.selectedImage!==e&&t.setState({selectedImage:e})}}},{key:"onRemoveImage",value:function(e){var t=this;return function(){var n=p(t.props.attributes.images,function(t,n){return e!==n});t.setState({selectedImage:null}),t.props.setAttributes({images:n})}}},{key:"onSelectImages",value:function(e){this.props.setAttributes({images:e.map(function(e){return m(e,["alt","caption","id","url"])})})}},{key:"setLinkTo",value:function(e){this.props.setAttributes({linkTo:e})}},{key:"toggleImageCrop",value:function(){this.props.setAttributes({imageCrop:!this.props.attributes.imageCrop})}},{key:"getImageCropHelp",value:function(e){return b(e?"Thumbnails are cropped to align.":"Thumbnails are not cropped.")}},{key:"setImageAttributes",value:function(e,t){var n=this.props,a=n.attributes.images,i=n.setAttributes;a[e]&&i({images:[].concat(r(a.slice(0,e)),[c({},a[e],t)],r(a.slice(e+1)))})}},{key:"uploadFromFiles",value:function(e){this.addFiles(e.target.files)}},{key:"addFiles",value:function(e){var t=this.props.attributes.images||[],n=this.props.setAttributes;h(e,function(e){n({images:t.concat(e)})},"image")}},{key:"componentWillReceiveProps",value:function(e){!e.isSelected&&this.props.isSelected&&this.setState({selectedImage:null,captionSelected:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,r=t.isSelected,a=t.className,i=n.images,o=n.imageCrop,c=n.linkTo,s=wp.element.createElement(w,{onFilesDrop:this.addFiles}),u=wp.element.createElement(j,null,!!i.length&&wp.element.createElement(I,null,wp.element.createElement(O,{onSelect:this.onSelectImages,type:"image",multiple:!0,gallery:!0,value:i.map(function(e){return e.id}),render:function(e){var t=e.open;return wp.element.createElement(v,{className:"components-toolbar__control",label:b("Edit Slider","gutenberg-slider"),icon:"edit",onClick:t})}})));return 0===i.length?wp.element.createElement(f,null,u,wp.element.createElement(T,{className:a,icon:"format-gallery",label:b("Slider","gutenberg-slider"),onSelectImage:this.onSelectImages,multiple:!0})):wp.element.createElement(f,null,u,wp.element.createElement(A,null,wp.element.createElement(S,{title:b("Slider Settings","gutenberg-slider")},wp.element.createElement(C,{label:b("Crop Images"),checked:!!o,onChange:this.toggleImageCrop,help:this.getImageCropHelp}),wp.element.createElement(E,{label:b("Link to"),value:c,onChange:this.setLinkTo,options:P}))),wp.element.createElement("ul",{className:a+" "+(o?"is-cropped":"")},s,i.map(function(t,n){return wp.element.createElement("li",{className:"blocks-gallery-item",key:t.id||t.url},wp.element.createElement(l.a,{url:t.url,alt:t.alt,id:t.id,isSelected:r&&e.state.selectedImage===n,onRemove:e.onRemoveImage(n),onSelect:e.onSelectImage(n),setAttributes:function(t){return e.setImageAttributes(n,t)},caption:t.caption}))}),r&&wp.element.createElement("li",{className:"blocks-gallery-item"},wp.element.createElement(k,{multiple:!0,isLarge:!0,className:"blocks-gallery-add-item-button",onChange:this.uploadFromFiles,accept:"image/*",icon:"insert"},b("Upload an image")))))}}]),t}(g);t.a=F},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(3),l=n.n(o),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=wp.element.Component,u=wp.components,p=u.IconButton,m=u.Spinner,d=wp.i18n.__,g=wp.utils.keycodes,f=wp.data.withSelect,b=wp.blocks.RichText,h=g.BACKSPACE,y=g.DELETE,v=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onImageClick=e.onImageClick.bind(e),e.onSelectCaption=e.onSelectCaption.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e.bindContainer=e.bindContainer.bind(e),e.state={captionSelected:!1},e}return i(t,e),c(t,[{key:"bindContainer",value:function(e){this.container=e}},{key:"onSelectCaption",value:function(){this.state.captionSelected||this.setState({captionSelected:!0}),this.props.isSelected||this.props.onSelect()}},{key:"onImageClick",value:function(){this.props.isSelected||this.props.onSelect(),this.state.captionSelected&&this.setState({captionSelected:!1})}},{key:"onKeyDown",value:function(e){this.container===document.activeElement&&this.props.isSelected&&-1!==[h,y].indexOf(e.keyCode)&&(e.stopPropagation(),e.preventDefault(),this.props.onRemove())}},{key:"componentWillReceiveProps",value:function(e){var t=e.isSelected,n=e.image,r=e.url;n&&!r&&this.props.setAttributes({url:n.source_url,alt:n.alt_text}),this.state.captionSelected&&!t&&this.props.isSelected&&this.setState({captionSelected:!1})}},{key:"render",value:function(){var e=this.props,t=e.url,n=e.alt,r=e.id,a=e.linkTo,i=e.link,o=e.isSelected,c=e.caption,s=e.onRemove,u=e.setAttributes,g=void 0;switch(a){case"media":g=t;break;case"attachment":g=i}var f=t?wp.element.createElement("img",{src:t,alt:n,"data-id":r,onClick:this.onImageClick}):wp.element.createElement(m,null),h=l()({"is-selected":o,"is-transient":t&&0===t.indexOf("blob:")});return wp.element.createElement("figure",{className:h,tabIndex:"-1",onKeyDown:this.onKeyDown,ref:this.bindContainer},o&&wp.element.createElement("div",{className:"blocks-gallery-item__inline-menu"},wp.element.createElement(p,{icon:"no-alt",onClick:s,className:"blocks-gallery-item__remove",label:d("Remove Image")})),g?wp.element.createElement("a",{href:g},f):f,c&&c.length>0||o?wp.element.createElement(b,{tagName:"figcaption",placeholder:d("Write caption…"),value:c,isSelected:this.state.captionSelected,onChange:function(e){return u({caption:e})},onFocus:this.onSelectCaption,inlineToolbar:!0}):null)}}]),t}(s);t.a=f(function(e,t){var n=e("core"),r=n.getMedia,a=t.id;return{image:a?r(a):null}})(v)},function(e,t,n){var r,a;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===a)for(var o in r)i.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}var i={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(r=[],void 0!==(a=function(){return n}.apply(t,r))&&(e.exports=a))}()}]);