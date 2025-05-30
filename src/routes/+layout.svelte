<script lang="ts">
    import '../app.css';
    import Header from '$components/Header.svelte';
    import Footer from '$components/Footer.svelte';

    const { children } = $props()
</script>

<Header />
{@render children()}
<Footer />