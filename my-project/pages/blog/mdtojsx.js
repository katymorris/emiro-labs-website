function mdToJsx(md) {
    try {
        const lines = md.split('\n');
        let jsx = '';
      
        lines.forEach(line => {
          if (line.startsWith('# ')) {
            jsx += `<h2>${line.slice(2)}</h2>`;
          } else if (line.startsWith('## ')) {
            jsx += `<h4>${line.slice(3)}</h4>`;
          } else {
            let modifiedLine = line;
      
            // Replace **bold** text
            const boldMatches = modifiedLine.match(/\*\*(.*?)\*\*/g);
            if (boldMatches) {
              boldMatches.forEach(match => {
                modifiedLine = modifiedLine.replace(match, `<strong>${match.slice(2, -2)}</strong>`);
              });
            }
      
            // Replace _emphasized_ text
            const emMatches = modifiedLine.match(/_(.*?)_/g);
            if (emMatches) {
              emMatches.forEach(match => {
                modifiedLine = modifiedLine.replace(match, `<em>${match.slice(1, -1)}</em>`);
              });
            }
      
            jsx += `<p>${modifiedLine}</p>`;
          }
        });
      
        return jsx;
    } catch (error) {
        console.error('Error converting Markdown to JSX:', error);
        return '';
    }
}
    
export default mdToJsx;