import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

class Toc extends React.Component {
  render() {
    const { toc, activeItemIds } = this.props;
    console.log(activeItemIds)
    // const attached = _createTocHTML(toc, activeItemIds);
    const items = toc.map(item => {
      return (
        <li style={{
          textAlign: 'left',
          marginLeft: `${(item.depth - 2) * 24}px`,
          listStyle: 'none'
          }}>
          <Link
            key={item.id}
            to={`#${item.id}`}
            className={activeItemIds.includes(item.id) ? 'active' : ''}>{item.value}</Link>
        </li>
      )
    })

    return (
      <ul style={{padding: '12px', background: '#eee'}}>
        {items}
      </ul>
    );
  }
}


export default Toc;
