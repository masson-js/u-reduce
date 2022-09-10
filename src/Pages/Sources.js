
import sources from '../storage/list-of-sourses'

import '../Pages/sources.css'


function Sources() {
  
  return (
    <>
      {sources.map((link) =>
        <div className="LinkConteier">
          <div className="SourcesList" id={link.id}>
            <ul class="List">
              <li><a target="_blank" href={link.link}>{`#${link.id}`} {link.title}</a></li>
            </ul>
          </div>
        </div>
        )
      }
    </>
  );
}

export default Sources;