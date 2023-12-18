import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl!, supabaseKey!)

interface RequestBody {
    content: string
    lang: string
    title: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { content } = req.body as RequestBody
        const { lang } = req.body as RequestBody
        const { title } = req.body as RequestBody

        if (!content) {
            res.status(400).json({ message: 'Uh? You didn\'t enter any code or text!' })
            return
        }

        const pasteData = {
            content: content as string,
            lang: lang as string,
            title: title ? title as string : 'Untitled',
        }

        try {
            const { data } = await supabase
                .from('paste')
                .insert(pasteData)
                .select()
            res.status(200).json(data)
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    } else {
        res.status(405).json({
            message: 'Method not allowed'
        })
    }
}