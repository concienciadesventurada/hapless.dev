<script lang="ts">
  let hover = false;
  export let fill: string;
  export let title: string;
  export let path: string;
</script>

<svg
  class="w-24 hover:duration-200"
	on:mouseenter={() => {
		hover = true;
	}}
	on:mouseleave={() => {
		hover = false;
	}}
	fill={hover ? fill : "#FFFFFF3D"}
	role="img"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg"
	><title>{title}</title>
  <path d={path}>
  </svg
>
