<script lang="ts">
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet,
        sectionName: string
    }

    const { children, sectionName }: Props = $props();
</script>

<div class="default-margin" id={sectionName}>
  <h2>{@render children()}</h2>
  <div class="underscore"></div>
</div>