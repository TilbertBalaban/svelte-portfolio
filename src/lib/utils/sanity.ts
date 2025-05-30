import type { ImageContent, PreparedImageContent, PreparedProject, PreparedTextContent, Project, TextContent } from '../types/sanity';
import { createClient, type ClientConfig } from '@sanity/client'
import  imageUrlBuilder  from '@sanity/image-url'

export const config: ClientConfig = {
  projectId: 'b50vfou5',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-05-30',
}

export const client = createClient(config)

const builder = imageUrlBuilder(client)

const prepareProjectContent = (content: TextContent | ImageContent): PreparedTextContent | PreparedImageContent => 
   content._type === 'block' ? {
      type: 'text',
      style: content.style,
      textToRender: content.children.map((child) => child.text).join('\n'),
    }
  : {
    type: 'image',
    url: builder.image(content).url(),
  }

export const prepareProjectEntry = (project: Project): PreparedProject => {
  return {
    name: project.name,
    company: project.company,
    stack: project.stack,
    dateAccomplished: project.dateAccomplished,
    slug: project.slug,
    imageUrl: builder.image(project.image).url(),
    content: project.content.map((content) => prepareProjectContent(content)),
  }
}