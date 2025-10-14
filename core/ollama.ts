const url: string = "http://localhost:11434/api/generate";




export async function generatePrompt(prompt: string): Promise<string> {

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            model: "phi3:3.8b-mini-128k-instruct-q4_K_M",
            prompt: prompt,
            stream: true
        })
    });

    const decoder = new TextDecoder();
    let full = ""
    for await (const chunk of response.body!) {
        const text = decoder.decode(chunk)
        for (const line of text.split("\n")) {
            if (!line.trim()) continue;
            try {
                const json = JSON.parse(line);
                if (json.response) full += json.response
                if (json.done) return full.trim();
            } catch { }
        }

    }


    return full.trim()
}
