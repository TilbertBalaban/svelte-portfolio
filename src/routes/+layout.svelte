<script lang="ts">
    import '../app.css';
    import Header from 'src/lib/components/Header.svelte';
    import Footer from 'src/lib/components/Footer.svelte';

    const { children } = $props()
</script>

<Header />
{@render children()}
<Footer />