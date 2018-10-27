import React from 'react'
import unified from 'unified'
import markdown from 'remark-parse'
import slug from 'remark-slug'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'



class Viewer extends React.Component {
  render() {
    const { rawMarkdownBody} = this.props

    const { contents } =
      unified()
      .use(markdown)
      .use(slug)
      .use(remark2rehype)
        .use(html)
        .processSync(rawMarkdownBody)

    return <div style={{textAlign: 'left', padding: '24px' }} dangerouslySetInnerHTML={{ __html: contents}}></div>
  }
}

export default Viewer