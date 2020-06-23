import React from 'react'

const Jsonld = (props) => {
    let data = {
        "@context": "https://schema.org/",
        "@type": "Article",
        "headline": `"Guided meditation audio: ${props.title}`,
        "image": [ `${props.thumbnail}` ],
        "author": `${props.author}`,
        "datePublished": `${props.created_at}`,
        "dateModified": `${props.updated_at}`,
        "image": {
            "@type": "imageObject",
            "url": `${props.thumbnail}`
        },
        "publisher": {
            "@type": "Organization",
            "name": "dhealthy.me",
            "logo": {
                "@type": "imageObject",
                "url": "https://storage.googleapis.com/shop-bucket/tea/logo-black.png"
            }
        }
       
    }
    
    return(
        <div className="pt-4 pb-4">
            
            <script type="application/ld+json">
                {JSON.stringify(data)}
            </script>
		</div>
    )
}

export default Jsonld