<template>
  <div>
    <!--
      <Logos mb-6 />
    -->
    <Suspense>
      <!--
        <PageView />
        <Phoillips />
      -->
      <TestTheModule />
      <template #fallback>
        <div op50 italic>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <!--
      <InputEntry />
    -->
  </div>
</template>
