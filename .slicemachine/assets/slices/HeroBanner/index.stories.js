import MyComponent from '../../../../slices/HeroBanner';

export default {
  title: 'slices/HeroBanner'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"cta_label":"Click here","cta_link":{"link_type":"Web","url":"https://slicemachine.dev"},"cta_type":"Primary"}],"primary":{"title_top_line":[{"type":"heading1","text":"Applied","spans":[]}],"title_bottom_line":[{"type":"heading1","text":"Basis","spans":[]}],"description":[{"type":"paragraph","text":"Ipsum voluptate amet mollit culpa commodo voluptate incididunt proident minim.","spans":[]}],"image":{"dimensions":{"width":640,"height":554},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0"}},"slice_type":"hero_banner","id":"_Default"}} />
_Default.storyName = ''

export const _WithoutCta = () => <MyComponent slice={{"variation":"withoutCta","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title_top_line":[{"type":"heading1","text":"Group","spans":[]}],"title_bottom_line":[{"type":"heading1","text":"Would","spans":[]}],"description":[{"type":"paragraph","text":"Commodo do consequat commodo veniam nostrud commodo. Aute nulla sunt enim adipisicing officia consectetur laboris incididunt id.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6"}},"slice_type":"hero_banner","id":"_WithoutCta"}} />
_WithoutCta.storyName = ''
