<template>
        <form
                name="contact"
                method="post"
                id="contact-form"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
            <p>
                <label>Your Name: <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
                <button type="submit">Send</button>
            </p>
        </form>
</template>

<style lang="styl" scoped>
    input
        width 100%

    textarea
        width 100%

</style>