import React from 'react'
import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'



class Viewer extends React.Component {
  render() {
    const { rowMarkdownBody} = this.props

    const { contents } =
      unified()
        .use(markdown)
        .use(remark2rehype)
        .use(html)
        .processSync(rowMarkdownBody)

    return <div style={{textAlign: 'left', padding: '24px' }} dangerouslySetInnerHTML={{ __html: contents}}></div>
  }
}

export default Viewer